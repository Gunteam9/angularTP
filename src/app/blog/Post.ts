export class Post {
  title: string = '';
  content: string = '';
  loveIts: number = 0;
  created_at: Date = new Date();

  constructor(...args: any[]) {
    if (args.length == 1)
      this.created_at = args[1];

    this.title = this.makeid(40);
    this.content = this.makeid(300);

  }

  private makeid(length: number): string {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
