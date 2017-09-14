# Wool Festival API

## Documentation
The documentation can, of course, be found [right here](https://github.com/SpindleMonkey/wooly-watch/api.md)


## Base URL
[NEED THE HEROKU URL HERE!!!]()

## Endpoints

| method | path                | description
|:-------|:--------------------|:--------------------------------------|
| GET    | /api                | Describes available endpoints         |
| GET    | /api/festival       | Lists all wool festivals by name only |
| GET    | /api/festival/:name | Lists info for a single wool festival |
| GET    | /api/festival/all.  | Lists all info for all wool festivals |
| POST   | /api/festival       | Add a new wool festival               |
| PUT    | /api/festival/:name | Update a festival                     |
| DELETE | /api/festival/:name | Delete a festival                     |

## Notes

If you search for a festival with more than one word in it's name, use '%20' for the space between words. If you're updating the aliases, address, or when field, use ', ' to separate multiple strings.

