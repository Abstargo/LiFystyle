from flask import request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from .models import User, db
from flask_jwt_extended import create_access_token

def init_routes(app):

    ##@app.route('/', methods=['POST'])
    ##def Home():
        

    @app.route('/signup', methods=['POST'])
    def signup():
        data = request.json
        
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        password2 = data.get('password2')

        if not all([username, email, password, password2]):
            return jsonify({"message": "All fields are required"}), 400

        if User.query.filter_by(username=username).first():
            return jsonify({"message": "All fields are required"}), 409
        if User.query.filter_by(email=email).first():
            return jsonify({"message": "Email already registred"}), 409

        if password != password2:
            return jsonify({"message": "Passwords do not match"}), 400

        hashed_password = generate_password_hash(password)
        new_user = User(username=username, email=email, password=hashed_password)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User created successfully"}), 201

    @app.route('/signin', methods=['POST'])
    def signin():
        data = request.json
        user = User.query.filter_by(username=data['username']).first()

        if user and check_password_hash(user.password, data['password']):
            
            access_token = create_access_token(identity=user.id)
            return jsonify({"message": "Sign in successful", "access_token": access_token}), 200
        else:
            return jsonify({'message': 'Invalid credentials'}), 401

    @app.route('/users', methods=['GET'])
    def get_users():
        users = User.query.all()
        return jsonify([{'id': user.id, 'username': user.username} for user in users])
