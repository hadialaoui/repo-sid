/**
 * Created by Abdelhakim on 12/8/2016.
 */

function createElement(nom,att){
    var element=document.createElement(nom);
    for(var e in att){
        element.setAttribute(e,att[e]);
    }
    return element;
}

el=document.querySelector('#container');
var tab=createElement('table',{border:'1px',bgcolor:'#ff2345',width:'600px',height:'100px'});
var tr1=createElement('tr',{});
var th1=createElement('th',{});
var th2=createElement('th',{});
var th3=createElement('th',{});
tr1.append(th1,th2,th3);
var tr2=createElement('tr',{});
var td1=createElement('td',{});
var td2=createElement('td',{});
var td3=createElement('td',{});
tr2.append(td1,td2,td3);
tab.append(tr1,tr2);



el.append(tab);