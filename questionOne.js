// 1-ci sual:
//1-ci sualın 1-ci həlli: Qəbul edilən array həmişə ["Yanvar","Fevral","Mart","Aprel"]-dirsə:

function Month(monthNames){
    const modifiedArray  = [];
    monthNames.map((month, indexOfMonth) => {
        modifiedArray.push(`${month} - ${indexOfMonth+1}`)
    })
    return modifiedArray;
}
console.log(Month( ["Yanvar","Fevral","Mart","Aprel"] ));


//1-ci sualın 2-ci həlli: Qəbul edilən array həmişə ["Yanvar","Fevral","Mart","Aprel"] deyilsə randomdursa:
function Month(monthNames){
    const allMonth = [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr" ];
    const modifiedArray = [];
    monthNames.map((month) => {
      const indexOfMonth = allMonth.indexOf(month);
      if (allMonth.includes(month)) {
        modifiedArray.push(`${month} - ${indexOfMonth + 1}`);
      }
    });
    return modifiedArray;
}
console.log(Month( ["Iyun","Yanvar","Mart","Dekabr"] ));
