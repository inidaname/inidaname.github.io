    AOS.init();
    const converter = new showdown.Converter();

    import { inidaname, myBlog } from './js/github.js'

    inidaname.getProfile().then(({ data: members }) => {
      $("#rdimg").attr("src", members.avatar_url);
    });

    myBlog.getContents().then((data) => {
      data.data.forEach(el => {
        if (el.type === 'dir') {
          console.log(el)
          myBlog.getContents('master', el.path).then(dt => console.log(dt))
        }
      })
    })