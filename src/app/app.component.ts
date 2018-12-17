import { Component } from '@angular/core';
import * as jsPDF from 'jspdf';
import { Formular } from './formular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Butstrapac example';
  userModel = new Formular('','','','','','','','','','','','','','','','','');
  private LOGO = require("logo.png");
/*   private JUMBOTRONAC = require("jumbo.jpeg");
  private ICO = require("formform.ico"); */
  downloadPdf() {
    let doc = new jsPDF();
    doc.addHTML(document.getElementById("obrz"), function() {
       doc.save("obrz.pdf");
    });
  }
}
