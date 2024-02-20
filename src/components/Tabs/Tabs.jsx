const Tabs = ({ items }) => {
	
	// TODO: Add tabs like chrome browser
  return (
    <div>
      <div>{items.map(({ heading }) => heading)}</div>
    </div>
  );
};

export default Tabs;
