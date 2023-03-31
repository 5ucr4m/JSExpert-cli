import Util from "../util.js";

const componentNameAnchor = "$$ComponentName";

const template = `
export default class $$ComponentNameRepository {
    constructor() {}

    create(data) {
        return Promise.reject("Not implemented yet!");
    }
    read(query) {
        return Promise.reject("Not implemented yet!");
    }
    update(id, data) {
        return Promise.reject("Not implemented yet!");
    }
    delete(id) {
        return Promise.reject("Not implemented yet!");
    }
}`;

export function repositoryTemplate(componentName) {
    return {
        fileName: `${componentName}Repository`,
        template: template.replaceAll(componentNameAnchor, Util.upperCaseFirstLetter(componentName))
    };
}