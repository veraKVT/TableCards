// My main array for table

    let tableDynamic = [{
            chek: 'true',
            imgCompUrl: 'images/figma.png',
            companyData: {
                companyName: 'Figma',
                companyUrl: 'https://www.figma.com/'
            },
            cardData: {
                cardName: 'MasterCard',
                cardNum: '***** 2468'
                },
            userData: {
                userName: 'Itai Bracha (Employee)',
                userEmail: 'Itai Bracha31@gmail.com',
                employeeStatus: true
            },
            lastTrans: {
                date: 'Jan 2,2022',
                sum: '$783.22'
            },
            transStatus: 'Pending',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/xd.png',
            companyData: {
                companyName: 'Adobe XD',
                companyUrl: 'https://www.adobe.com/'
            },
            cardData: {
                cardName: 'Visa',
                cardNum: '***** 2468'
            },
            userData: {
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com',
                employeeStatus: false 
            },
            lastTrans: {
                date: 'Oct 2,2022',
                sum: '$783.22'
            },
            transStatus: 'Done',
            endDate: 'Oct 22,2022',
            totalUsed: '$283.22',
            imgDotsUrl: 'images/3dot.png'
        },{  
            chek: 'true',
            imgCompUrl: 'images/mailchimp.png',
            companyData: {
                companyName: 'Mailchimp',
                companyUrl: 'https://mailchimp.com/'
            },
            cardData: {
                cardName: 'Visa',
                cardNum: '***** 2468'
            },
            userData: {
                userName: 'Itai Bracha (Employee)',
                userEmail: 'Itai Bracha31@gmail.com',
                employeeStatus: true
            },
            lastTrans: {
                date: 'Apr 2,2022',
                sum: '$783.22'
            },
            transStatus: 'Done',
            endDate: 'Apr 30,2022',
            totalUsed: '$983.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/x.png',
            companyData: {
                companyName: 'WIX',
                companyUrl: 'https://www.wix.com/'
            },
            cardData: {
                cardName: 'Visa',
                cardNum: '***** 2468'
            },
            userData: {
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com',
                employeeStatus: false
            },
            lastTrans: {
                date: 'Aug 2,2022',
                sum: '$783.22'
            },
            transStatus: 'Pending',
            endDate: 'Aug 10,2022',
            totalUsed: '$583.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/youtube.png',
            companyData: {
                companyName: 'Youtube',
                companyUrl: 'https://www.youtube.com/'
            },
            cardData: {
                cardName: 'MasterCard',
                cardNum: '***** 2468'
            },
            userData: {
                userName: 'Itai Bracha (Employee)',
                userEmail: 'Itai Bracha31@gmail.com',
                employeeStatus: true
            },
            lastTrans: {
                date: 'Jan 2,2022',
                sum: '$783.22'
            },
            transStatus: 'Done',
            endDate: 'Jan 11,2022',
            totalUsed: '$183.22',
            imgDotsUrl: 'images/3dot.png'
        }]

// 2 functions for rows with rowspan

function createCellsNoRowspanForRowOne(obj){
    let cellText = '';    
    for(let name in obj){
        switch (name){
            case 'companyName':
                cellText += "<td class=\"upline\">"+ obj.companyName +"</td>";
                break;
            case 'cardName':
                cellText += "<td class=\"upline\">"+ obj.cardName +"</td>";
                break;
            case 'userName':
                cellText += "<td class=\"upline\">"+ obj.userName +"</td>";
                break;
            case 'date':
                cellText += "<td class=\"upline\">"+ obj.date +"</td>";
                break;
            default:                
        } 
    }
    return cellText;        
}


function createCellsNoRowspanForRowTwo(obj){
    let cellText = '';   
    for(let name in obj){
        switch (name){
            case 'companyUrl':
                cellText += "<td class=\"under\">"+ obj.companyUrl +"</td>";
                break;
            case 'cardNum':
                cellText += "<td class=\"under\">"+ obj.cardNum +"</td>";
                break;
            case 'userEmail':
                cellText += "<td class=\"under\">"+ obj.userEmail +"</td>";
                break;
            case 'sum':
                cellText += "<td class=\"under\">"+ obj.sum +"</td>";
                break;
            default:                
        }
    }
    return cellText;
}

// function for chek

function chekNestedObject(nestOb){    
    if (typeof nestOb === 'object' && nestOb !== null && !Array.isArray(nestOb)){
        return true;
      } else {
        return false;
      }
}

// Main function for dynamic table

function createTbodyForDynamicTable(tableData){ 
    let tableBody = document.getElementById('myTbody'); 
                
    for( let i=0; i < tableData.length; i++){
        let tableRows1 = document.createElement('tr');
        let tableRows2 = document.createElement('tr');
        for(let key in tableData[i]){
            let cellData1 = '';
            let cellData2 = '';                
            if (key === 'chek'){
                cellData1 = "<th scope=\"row\" rowspan=\"2\" class=\"kvadro\"><input type=\"checkbox\" id=\"check\" value = " + tableData[i][key] + "></th>";
            } else if (key === "imgDotsUrl"){
                cellData1 = "<td rowspan=\"2\" class=\"dot\"><img src=" + tableData[i][key] + "></td>";
            } else if (key === "imgCompUrl"){
                cellData1 = "<td rowspan=\"2\"><img src=" + tableData[i][key] + "></td>";
            } else if (key === "transStatus") {
                cellData1 = addStyleForStatus(tableData[i], key);                                   
            } else if (chekNestedObject(tableData[i][key]) === true){
                cellData1 = createCellsNoRowspanForRowOne(tableData[i][key]);
            } else {
                cellData1 = "<td rowspan = \"2\">"+tableData[i][key]+"</td>";
            }
                               
            tableRows1.innerHTML += cellData1;
                
            if (chekNestedObject(tableData[i][key]) === true){
                cellData2 = createCellsNoRowspanForRowTwo(tableData[i][key]);
            }             
                    
            tableRows2.innerHTML += cellData2;             
        }
        tableBody.appendChild(tableRows1);
        tableBody.appendChild(tableRows2);
    }             
}
createTbodyForDynamicTable(tableDynamic);

// function for table footer

let tableFootNumbers = ['1','2','3','4'];

    function createTfootNumbers(arr){
        let parent = document.getElementById('circleNumbers');

        let first = document.createElement('div');
        first.classList.add('footnum');
        let firstNode = document.createTextNode('<');        
        first.appendChild(firstNode);        
        parent.appendChild(first);       

        for(let i = 0; i < arr.length; i++){
            let number = document.createElement('div');
            number.classList.add('footnum');
            let numberNode = document.createTextNode(arr[i]);        
            number.appendChild(numberNode);        
            parent.appendChild(number);  
        }

        let last = document.createElement('div');
        last.classList.add('footnum');
        let lastNode = document.createTextNode('>');        
        last.appendChild(lastNode);        
        parent.appendChild(last);
    }
    createTfootNumbers(tableFootNumbers);

    // function for status style

    function addStyleForStatus(obj, key){
        let result = '';
        if (key === 'transStatus' && obj[key] === 'Done'){ 
            result = "<td rowspan = \"2\" class=\"status\">" + "\u3007 " + obj[key] +"</td>";
        } else {
            result = "<td rowspan = \"2\" class=\"status1\">" + "\u3007 " + obj[key] +"</td>";
        }
        return result;
    }

// removing rows

function removeOldRows(){  
    let parent = document.getElementById('myTbody');
    if (parent.hasChildNodes() === true){
        parent.innerHTML = '';       
    }
}        
    
// functions for sorting
    
function sortingTableByStatus(tableData){    
    tableData.sort((a, b) => {
        let fa = a.transStatus.toLowerCase();
        let fb = b.transStatus.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;        
    });
    removeOldRows();
    createTbodyForDynamicTable(tableData);
}

function sortingTableByTotalUsed(tableData){
    tableData.sort((a, b) => {
    let fa = a.totalUsed.substring(1);
    let fb = b.totalUsed.substring(1);
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;        
    });
    removeOldRows();
    createTbodyForDynamicTable(tableData);
}

function sortingTableByCompanyName(tableData){    
    tableData.sort((a, b) => {
        let fa = a.companyData.companyName.toLowerCase(),
            fb = b.companyData.companyName.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;        
    });
    removeOldRows();
    createTbodyForDynamicTable(tableData);
}

function sortingTableByDate(tableData){
    tableData.sort((a, b) => {
        let da = new Date(a.endDate),
            db = new Date(b.endDate);
        return da - db;
    });
    removeOldRows();
    createTbodyForDynamicTable(tableData);
}

function selectSorting(tableData){
    let sortInput = document.getElementById('sorter').value;

    switch (sortInput){
        case 'status':
            sortingTableByStatus(tableData);
            break;
        case 'total':
            sortingTableByTotalUsed(tableData);
            break;
        case 'name':
            sortingTableByCompanyName(tableData);
            break;
        case 'date':
            sortingTableByDate(tableData);
        default:
    }    
}

// functions for filter

function filterByStatus(tableData){
    let newArr = tableData.filter(function(el){
       return el.transStatus === 'Done';
    });
    removeOldRows();
    createTbodyForDynamicTable(newArr);
}

function filterByEmployee(tableData){    
    let newArr = tableData.filter(function(el){
       return el.userData.employeeStatus === true;
    });
    removeOldRows();
    createTbodyForDynamicTable(newArr);
}

// search filter

function forSearch(tableData){
    function checkSubstring(rowData){ 
        let search = document.getElementById('mySearch');
        let quest = search.value.toUpperCase();
        for (let key in rowData){            
            if (chekNestedObject(rowData[key]) === true){
                for (let prop in rowData[key]){
                    if (prop !=='employeeStatus'){ 
                        if (rowData[key][prop].toUpperCase().indexOf(quest) > -1){
                            return true;
                        }   
                    }                                        
                }
            } else if (rowData[key].toUpperCase().indexOf(quest) > -1){                
                return true;
            }            
        }
        return false;
    }
         
    let newArr = tableData.filter(checkSubstring);    
    removeOldRows();
    createTbodyForDynamicTable(newArr);
}
 


    