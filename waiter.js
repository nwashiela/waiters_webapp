module.exports = function (pool) {
  async function getEmployees(name) {
    let theNames = await pool.query("select id from employees where names = $1",[name]);
    return theNames;
  }

  async function setNames(name) {
      let people = await getEmployees(name);
        if (people.rows === 0) {
            let names = "insert into employees(names) values ($1)";
            await pool.query(names,[people]);
          }    
}

  return {
    setNames,
    getEmployees,
  };
};
