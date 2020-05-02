

document.getElementById("setDefaultsBtn").addEventListener('click', () => {

    function populate() {
        
        window.populateMonThruFri = () => {
            for (var i = 0; i < 5; i++) {
                setDefaults(i);
            }
        }

        window.changeFieldValue = (id, value) => {
            var el = document.getElementById(id).value = value;
        };

        window.setDefaults = ( day ) =>  {

            var AM = 0;
            var PM = 1;


            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.timeEntrySpanType", "Labor");
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startHourM", 8);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startMinute", 30);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.startMeridiem", AM);

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endHourM", 12);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endMinute", 00);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans0.endMeridiem", PM);
            
            document.querySelectorAll("#billingDetailId" + day + " a")[2].click();

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.timeEntrySpanType", "Lunch");
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startHourM", 12);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startMinute", 00);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.startMeridiem", PM);

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endHourM", 12);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endMinute", 30);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans1.endMeridiem", PM);


            document.querySelectorAll("#billingDetailId" + day + " a")[3].click();

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startHourM", 12);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startMinute", 30);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.startMeridiem", PM);

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.timeEntrySpanType", "Labor");

            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endHourM", 6);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endMinute", 00);
            changeFieldValue("billingDetailItems" + day + ".billingTimeSpans2.endMeridiem", PM);

        };

        try {
            window.populateMonThruFri(); 
        } catch(e){
           //mute 
        }
        
    }

    chrome.tabs.executeScript({
        code: '(' + populate + ')();'
    }, (results) => {
        console.log('Popup script:')
        console.log(results[0]);
    });
});
