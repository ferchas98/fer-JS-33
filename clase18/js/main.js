const getKoders = async () => {
  let response = await fetch(
    "https://javascriptfer-default-rtdb.firebaseio.com/koders/.json"
  );

  let koders = await response.json();
  console.log(koders);

  //   for (key in koders) {
  //     console.log(key);
  //     console.log(koders[key]);
  //   }

  let keys = Object.keys(koders);
  console.log(keys);
  let values = Object.values(koders);
  console.log(values);

  let koderArray = keys.map((key) => {
    return { ...koders[key], key };
  });
  console.log(koderArray);
};

const postKoder = async (koderObject) => {
  let response = await fetch(
    "https://javascriptfer-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );
  let data = await response.json;
  console.log(data);
};

getKoders();
