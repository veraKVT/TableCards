    let tableDynamic = [{
            chek: 'true',
            imgCompUrl: 'images/figma.png',
            companyData: [{
                companyName: 'Figma',
                companyUrl: 'https://www.figma.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
                }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/xd.png',
            companyData: [{
                companyName: 'Adobe XD',
                companyUrl: 'https://www.adobe.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{  
            chek: 'true',
            imgCompUrl: 'images/mailchimp.png',
            companyData: [{
                companyName: 'Mailchimp',
                companyUrl: 'https://mailchimp.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/x.png',
            companyData: [{
                companyName: 'WIX',
                companyUrl: 'https://www.wix.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Pending',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        },{
            chek: 'true',
            imgCompUrl: 'images/youtube.png',
            companyData: [{
                companyName: 'Youtube',
                companyUrl: 'https://www.youtube.com/'
            }],
            cardData: [{
                cardName: 'Visa',
                cardNum: '***** 2468'
            }],
            userData: [{
                userName: 'Itai Bracha',
                userEmail: 'Itai Bracha31@gmail.com'
            }],
            lastTrans: [{
                date: 'Jan 2,2022',
                sum: '$783.22'
            }],
            transStatus: 'Done',
            endDate: 'Jan 12,2022',
            totalUsed: '$783.22',
            imgDotsUrl: 'images/3dot.png'
        }]
    
function createCellsNoRowspanForRowOne(obj){
    let cellText = '';    
    for(let name in obj){
        switch (name){
            case 'companyName':
                cellText += "<td class=\"main\">"+ obj.companyName +"</td>";
                break;
            case 'cardName':
                cellText += "<td class=\"main\">"+ obj.cardName +"</td>";
                break;
            case 'userName':
                cellText += "<td class=\"main\">"+ obj.userName +"</td>";
                break;
            case 'date':
                cellText += "<td class=\"main\">"+ obj.date +"</td>";
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
                    cellData1 = "<td rowspan = \"2\" class=\"status\">" + "\u3007 " + tableData[i][key] +"</td>";                
            } else if (Array.isArray(tableData[i][key]) === true){
                cellData1 = createCellsNoRowspanForRowOne(tableData[i][key][0]);
            } else {
                cellData1 = "<td rowspan = \"2\">"+tableData[i][key]+"</td>";
            }
                               
            tableRows1.innerHTML += cellData1;
                
            if (Array.isArray(tableData[i][key]) === true){
                cellData2 = createCellsNoRowspanForRowTwo(tableData[i][key][0]);
            }             
                    
            tableRows2.innerHTML += cellData2;             
        }
        tableBody.appendChild(tableRows1);
        tableBody.appendChild(tableRows2);
    }             
}    

createTbodyForDynamicTable(tableDynamic);

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