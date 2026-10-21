export type Subject = {
    code: string;
    name: string;
    credits: number;
}

export type Student = {
    id : string;
    name : string;
    department : string;
    departmentSlug: string;
    year : number;
    email : string;
    enrollment : string;
    status : string;
    initials : string;
    about : string;
    specialization : string;
    subjects : Subject[];
}