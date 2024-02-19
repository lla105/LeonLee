export class Tag {
    // define a tag named ANGULAR. the static readonly variables are our enum.
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly C = new Tag('C', 'green');
    static readonly Cpp = new Tag('C++', 'orange');
    // static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');


    private constructor(private readonly key:string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}