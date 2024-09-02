from setuptools import setup, find_packages

setup(
    name='myapp',
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
