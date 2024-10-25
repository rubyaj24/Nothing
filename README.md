# .env File

A `.env` file is used to store environment variables for a project. These variables can be used to configure the application without hardcoding sensitive information into the source code.

## Example

```plaintext
# Database configuration
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3

# API keys
API_KEY=your_api_key_here
```

## Usage

To use the variables defined in the `.env` file, you typically need to use a library or framework that supports loading environment variables from this file. For example, in Node.js, you can use the `dotenv` package:

```javascript
require('dotenv').config();

console.log(process.env.DB_HOST); // Output: localhost
```

## Best Practices

- **Do not commit** the `.env` file to version control. Add it to your `.gitignore` file.
- **Keep it secure** and share it only with trusted team members.
- **Use different files** for different environments (e.g., `.env.development`, `.env.production`).

## References

- [dotenv GitHub repository](https://github.com/motdotla/dotenv)
- [Managing Secrets in Your Project](https://12factor.net/config)
