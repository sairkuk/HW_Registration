class Comment {
    constructor(text){
        this.text = this.text;
        this.likesQuantity = 0;
    }

    addLike(){
        this.likesQuantity +=1 // or this.likesQuantity = this.likesQuantity +1
    }
    static mergeComments(first, second){
        return`${first} + ${second}` 
    }
}

const firstComment = new Comment('Text 1')
const SecondComment = new Comment('Text 2')

let mergedText = Comment.mergeComments(firstComment.text, SecondComment.text);
console.log(mergedText);


// const firstComment = new Comment('This is coment 1 text');

// // console.log(firstComment);
// // console.log(firstComment.likesQuantity);

// firstComment.addLike();


// // console.log(firstComment);
// // console.log(firstComment.likesQuantity);

// const secondComment = new Comment('This is coment 2 text');
// const thirdComment = new Comment('This is coment 3 text');
// secondComment.addLike();
// firstComment.addLike();

// console.log(firstComment);
// console.log(secondComment);
// console.log(thirdComment);