export default function (data) {
    //pega a tag principal que irá receber o menu
    const tree = document.querySelector('nav#tree');

    //recebe toda a arvore de elemento
    const menu = document.createElement('ul');

    const firstLevel = data.filter(item => !item.parent);

    const getFirstLis = firstLevel.map(buildTree);//retorna novo array com lis
    getFirstLis.forEach(li => {
        menu.append(li);//adiciona li's ao menu
    })

    function buildTree(item) {

        //primeiro elemento
        const li = document.createElement('li');
        li.innerHTML = item.name;


        const children = data.filter(child => child.parent === item.id);

        if (children.length > 0) {

            //adiciona um click para os parents
            li.addEventListener('click', event => {
                event.stopPropagation();
                event.target.classList.toggle('open');
            })

            //adiciona uma classe identificadora que tem filhos
            li.classList.add('has-children');
            //constroi os filhos
            const subMenu = document.createElement('ul');
            children.map(buildTree)
                .forEach(li => { subMenu.append(li) });
            li.append(subMenu);
        }

        //adicionar os elements ao menu
        return li;
    }















    //adicionar o menu no html
    tree.append(menu);
}