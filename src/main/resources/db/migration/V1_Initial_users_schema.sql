CREATE TABLE users(
id SERIAL PRIMARY KEY,
prefix CHAR(3) NOT NULL,
unique_id VARCHAR(20) GENERATED ALWAYS AS (prefix||LPAD(id::TEXT, 10, '0')) STORED,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(300) NOT NULL,
first_name VARCHAR(100) NOT NULL,
last_name VARCHAR(100) NOT NULL,
phone_number VARCHAR(15),
created_at TIMESTAMP DEFAULT NOW(),
updated_at TIMESTAMP DEFAULT NOW(),
is_active BOOLEAN DEFAULT FALSE,
is_verified BOOLEAN DEFAULT FALSE,
role VARCHAR(100) DEFAULT 'user',
auth_provider VARCHAR(50) DEFAULT 'keySpring',
google_id VARCHAR(300),
last_login_at TIMESTAMP,
password_reset_token VARCHAR(300),
reset_toke_expires_at TIMESTAMP,
failed_login_attempts INTEGER DEFAULT 0,
account_locked_until TIMESTAMP);