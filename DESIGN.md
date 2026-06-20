## ideas for the application

- nuxt fullstack app that exposes a lighting control board style UI to the user to allow for controlling Hue lights via a bridge on the server's LAN
- backend makes requests to the bridge to get and update light attributes
- backend translates between UI API and Hue API

- frontend ideas
  - show a grid of all of the lights and/or rooms in the Hue system
  - let user select one to many lights/groups to modify properties of at one time
  - modal? pick mode: pick lights to put in "tray"; update mode: change XY hue and brightness of lights in tray
  - keyboard controlled if possible, press numbers 1-9 to select or deselect those lights/groups; if more than 9 objects, separate into banks A/B/C, hold or press some key to switch to or cycle through the banks

- backend ideas
  - prisma ORM, store lights in a libsql or SQLite database
  - 'refresh' database to current bridge status by hitting Hue API (via a library, TBD)
  - user updates to object status write to DB first, then some process hits Hue API to make the updates
  - extended attributes about the lights specific to this app can be stored in additional columns, e.g. bank ID or preferred sort order
  - https://github.com/jdmg94/Hue-Sync
  - https://npmx.dev/package/@prisma/adapter-libsql

### prisma stuff

Next, set up your database:

1. Configure your DATABASE_URL in prisma.config.ts
2. Run prisma db pull to introspect your database.

Then, define your models in prisma/schema.prisma and run prisma migrate dev to apply your schema.

Learn more: https://pris.ly/getting-started
