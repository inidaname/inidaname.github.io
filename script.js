    AOS.init();
    const converter = new showdown.Converter();

    import { inidaname, myBlog, gh } from './js/github.js'

    inidaname.getProfile().then(({ data: members }) => {
      $("#rdimg").attr("src", members.avatar_url);
    });

