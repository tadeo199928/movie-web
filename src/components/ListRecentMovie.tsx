interface List {
  recentSearch: string;

}


function RerturnList ({list} : {list: List}) {

      return (
    <div className="recent-list">
        <p>{list.recentSearch}</p>
    </div>
  );

}
export default RerturnList