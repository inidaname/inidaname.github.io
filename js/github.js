AOS.init();
const gh = new GitHub({
	username: 'inidaname',
	token: '8cfcd51e6ca09b0fe24e297e6589075edafb802a '
});
export const inidaname = gh.getUser();
export const myBlog = gh.getRepo('inidaname/myblogs');
