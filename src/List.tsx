interface List {
  id: number;
  name: string;
  calories: number;
}

interface Items {
  items: List[];
}

export function List(props: Items) {
  props.items.sort((element1: List, element2: List) => {
    return element1.name.localeCompare(element2.name);
  });

  const ListItems = props.items.map((fruit) => (
    <li>
      {fruit.name} {fruit.calories}
    </li>
  ));
  return <ul>{ListItems}</ul>;
}

export default List;
