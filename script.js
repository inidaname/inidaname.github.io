    AOS.init();
    var gh = new GitHub({
      username: 'inidaname',
      token: "12dcabded067c32781baeccdf397efb978e96fb3"
    });
    const inidaname = gh.getUser("inidaname");
    const myBlog = gh.getRepo('inidaname/idchal');
    inidaname.getProfile().then(({ data: members }) => {
      $("#rdimg").attr("src", members.avatar_url);
    });
    myBlog.getContents().then(data => console.log(data))
    console.log(myBlog)
    inidaname.listRepos().then(data => console.log(data))
