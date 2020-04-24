

const createButton = () => {
	var btn = document.createElement("BUTTON");
	btn.innerHTML = " SET DEFAULTS ";
	btn.style = "margin-left: 20px;margin-right:-115px;height: 30px; width: 130px";

	btn.onclick = function(){

		for (var i = 0; i < 5; i++) {
			setDefaults(i);
		}
	}

	return btn;
};

const appendButton = (row) => {
	var cell = document.createElement("TD");
	var btn = createButton();
	
	cell.appendChild(btn);
	row.appendChild(cell);

	placeToPutButton.appendChild(row);
};


const changeFieldValue = (id, value) => {
	var el = document.getElementById(id).value = value;
};

const setDefaults = ( day ) =>  {

	var AM = 0;
	var PM = 1;


	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.timeEntrySpanType", "Labor");
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startHourM", 9);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startMeridiem", AM);

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endHourM", 12);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endMeridiem", PM);
	
	document.querySelectorAll("#billingDetailId" + day + " a")[2].click();

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.timeEntrySpanType", "Lunch");
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startHourM", 12);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startMeridiem", PM);

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endHourM", 1);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endMeridiem", PM);


	document.querySelectorAll("#billingDetailId" + day + " a")[3].click();

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startHourM", 1);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startMeridiem", PM);

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.timeEntrySpanType", "Labor");

	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endHourM", 5);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endMinute", 00);
	changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endMeridiem", PM);

};

var placeToPutButton = document.querySelector(".header_supplier tbody tr");

appendButton(placeToPutButton);


