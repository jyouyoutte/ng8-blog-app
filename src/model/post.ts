export class Post{
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(created_at: Date){
        this.title =  'Saisir votre titre';
        this.content = 'Saisir votre post'
        this.loveIts = 0;
        this.created_at = created_at;
    }

  
}