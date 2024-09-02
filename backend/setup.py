from setuptools import setup, find_packages

setup(
    name='my_flask_app',
    version='1.0',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'Flask',
        'Flask-SQLAlchemy',
        'Flask-Cors',
        'Flask-Migrate',
        'bcrypt',
        'pymysql'
    ],
)