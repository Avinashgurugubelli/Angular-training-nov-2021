
export class ABC {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}
export class XYZ {
    private abc: ABC;
    constructor(abc: ABC) {
        this.abc = abc;
    }
}

export class Skill {
    public skillName:string = "";
    public experience: number = NaN;
    private xyz: XYZ;
    constructor(skillName:string, experience: number, xyz: XYZ) {
        this.skillName = skillName;
        this.experience = experience;
        this.xyz = xyz;
    }
}

export class Person {
    public name: string = "";
    public id: number = NaN;
    public skill: Skill;
    constructor(skill: Skill) {
        this.skill = skill;
    }
}
const abcObj = new ABC("ABC OBJ");
const xyzObj = new XYZ(abcObj);
const s = new Skill("JS", 5, xyzObj);
const p = new Person(s);