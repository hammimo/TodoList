const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

function onAdd(){
    // 사용자가 입력한 텍스트를 받아옴
    const text = input.value;
    if(text === ''){ //입력값이 없을때 추가되지 않도록
        input.focus(); //input에 focus
        return; 
    }
    // 새로운 아이템을 만든다 ( 텍스트 + 삭제 버튼 )
    const item = createItem(text);
    // items 컨테이너안에 새로 만든 아이템을 추가한다
    items.appendChild(item);
    // 새로 추가된 아이템으로 이동(스크롤링)
    item.scrollIntoView({ block : 'center'});
    // 인풋 초기화
    input.value = '';
    input.focus();
}
let id = 0; //실제로는 UUID를 쓰는 것이 좋다.
function createItem(text){
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class ="fa-solid fa-trash-can" data-id=${id}></i>
            </button>
    </div>
    <div class="item__divider"></div> 
    `;
    id++;

    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const name = document.createElement('span');
    // name.setAttribute('class', 'item__name');
    // name.innerText = text; 
    // // input에서 받은 text를 받아야 하므로 innerText!

    // const deleteBtn = document.createElement('button');
    // deleteBtn.setAttribute('class', 'item__delete');
    // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    // // delete button은 변경될 이유가 없으므로 복붙^^;
    // deleteBtn.addEventListener('click', ()=>{
    //     items.removeChild(itemRow)});


    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');

    // // item 에 span과 deletebutton을 넣어줘야 한다.
    // item.appendChild(name);
    // item.appendChild(deleteBtn);

    // // itemRow에 생성한 item과 divider 추가
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);

    return itemRow;
    };



addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keydown', (event) => { // enter를 쳐도 입력 가능하도록 !
 if(event.key === 'Enter'){
    onAdd();
 }
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if(id){
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
    
});