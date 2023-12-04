var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let firstDate = new Date(date1);
	let secondDate = new Date(date2);
	let timeDiff = secondDate.getTime() - firstDate.getTime();
	const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

