import { db } from "../src/ext.js";

db().exec(await Bun.file('./src/schema.sql').text())