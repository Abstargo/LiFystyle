from flask import request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from .models import User, db

def init_routes(app):

    ##@app.route('/', methods=['POST'])
    ##def Home():
        

    @app.route('/signup', methods=['POST'])
    def signup():
        data = request.json

        if User.query.filter_by(username=data['username']).first():
            return jsonify({"message": "Username already exists"}), 409

        hashed_password = generate_password_hash(data["password"])

        new_user = User(username=data['username'], password=hashed_password)

        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User created successfully"}), 201

    @app.route('/signin', methods=['POST'])
    def signin():
        data = request.json
        user = User.query.filter_by(username=data['username']).first()
        if user and check_password_hash(user.password, data['password']):
            return jsonify({"message": "Sign in successful"}), 200
        else:
            return jsonify({'message': 'Invalid credentials'}), 401

    @app.route('/users', methods=['GET'])
    def get_users():
        users = User.query.all()
        return jsonify([{'id': user.id, 'username': user.username} for user in users])
