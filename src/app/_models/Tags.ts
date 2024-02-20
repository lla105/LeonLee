export class Tag {
    // define a tag named ANGULAR. the static readonly variables are our enum.
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#4d88ff');
    static readonly PYTHON = new Tag('Python', 'pink');
    static readonly C = new Tag('C', 'green');
    static readonly Cpp = new Tag('C++', 'orange');
    static readonly TKINTER = new Tag('Tkinter', '#6e6e6e');
    static readonly GOOGLE_API = new Tag('Google Cloud Api', '#0F9D58');
    static readonly SQL = new Tag('SQL', '#b34a04');
    static readonly KOTLIN = new Tag('Kotlin', '#b41dc2');
    static readonly JAVA = new Tag('Java', '#d99d11');
    static readonly WEKA = new Tag('Weka', '#660000');
    static readonly HTML = new Tag('HTML', '#ffa703');
    static readonly CSS = new Tag('CSS', '#1a66ff');





    private constructor(private readonly key:string, public readonly color: string) {

    }

    toString() {
        return this.key
    }
}