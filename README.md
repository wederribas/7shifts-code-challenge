# 7shifts Hackathon Challenge - Vanhack

This project was developed during the Hackathon promoted by Vanhack. This is the [7shifts](https://7shifts.com) challenge.

# How to run the Express API

Follow the steps below to get the API up and running:

```
# Clone the repository

# Access api folder and start the server
$ cd api/
$ yarn run start
```

# Available APIs endpoints

```
http://127.0.0.1:8000/api/locations
http://127.0.0.1:8000/api/locations/:locationId
http://127.0.0.1:8000/api/locations/:locationId/worked-hours
http://127.0.0.1:8000/api/time-punches
http://127.0.0.1:8000/api/time-punches/:userId/users
http://127.0.0.1:8000/api/users
http://127.0.0.1:8000/api/users/:userId/locations/:locationId
http://127.0.0.1:8000/api/users/:userId/locations/:locationId/worked-hours
```

## Built With

- [ExpressJS](https://expressjs.com/)
- [NodeJS](https://nodejs.org/en/)

## Authors

- Weder Ribas - [@wederribas](https://twitter.com/wederribas)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
