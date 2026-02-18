class user{
    constructor(name,followers,following,posts,image,bio){
        this.name = name;
        this.followers = followers;
        this.following = following;
        this.posts = posts;
        this.image = image;
        this.bio = bio;
    }
    name;
    followers;
    following;
    posts;
    image;
    bio;
}

let kartik = new user('kartik',350,100,100,'https:/image', 'abcd'); // initialization
let bhavik = new user('bhavik',450,200,200,'https:/image', 'bded');

let name = 'kuchbhi';
let surname = 'hhh';
let bhaviktrivedi = {
    name,
    surname
}

console.log({bhaviktrivedi});

// console.log(kartik);
// console.log(bhavik);
