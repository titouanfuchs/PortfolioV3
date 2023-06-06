export default class ProjectData{
    public name : string = "Project Name";
    public description : string = "Project Description";
    public type: string = "Personnel";
    public startDate: string = "2023";
    public endDate: string = "2024";
    public technos: string[] = [];
    public inProgress: boolean = false;

    public constructor(name: string, description: string, type: string, startDate: string, endDate: string, technos: string[], inProgress: boolean){
        this.name = name;
        this.description = description;
        this.type = type;
        this.startDate = startDate;
        this.endDate = endDate;
        this.technos = technos;
        this.inProgress = inProgress;
    }
}