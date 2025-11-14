export interface Parent {
    name      : string,
    children  ?: string[]
}

const parent1:Parent = {
    name : 'Parent1',
    children : ['A', 'B']
}

const getChildrenCount = (parent:Parent):number => parent.children?.length || 0;

console.log(getChildrenCount(parent1));