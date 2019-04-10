AOS.init();
import { details } from '../config/config.js'
export const gh = new GitHub({
	username:  details.username,
	token: blowfish.decrypt(details.key,'something', {cipherMode: 0, outputType: 0})
});
export const inidaname = gh.getUser();
export const myBlog = gh.getRepo('inidaname/myblogs');
