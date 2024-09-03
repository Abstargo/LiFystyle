from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from werkzeug.security import generate_password_hash, check_password_hash
from .config import Config
from .models import db

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    app.config['JWT_SECRET_KEY'] = 'secret_token'
    jwt = JWTManager(app)

    CORS(app)
    db.init_app(app)
    Migrate(app, db)

    from .routes import init_routes
    init_routes(app)

    return app
