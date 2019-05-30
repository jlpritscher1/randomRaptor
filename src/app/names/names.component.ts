import { Component, OnInit } from '@angular/core';
import { NameTile } from '../models/name';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  constructor() { }

  tiles: NameTile[] = [
    {
      text:'Kawhi Leonard #2',
      position:'SF',
      id:1
    },
    {
      text:'Kyle Lowry #7',
      position:'PG',
      id:2
    },
    {
      text: 'Pascal Siakam #43',
      position:'PF',
      id:3
    },
    {
      text:'Marc Gasol #33',
      position:'C',
      id:4
    },
    {
      text:'Serge Ibaka #9',
      position:'C',
      id:5
    },
    {
      text: 'Fred VanVleet #23',
      position:'PG',
      id:6
    },
    {
      text:'Danny Green #14',
      position:'SG',
      id:7
    },
    {
      text:'Norman Powell #24',
      position:'SG',
      id:8
    },
    {
      text: 'Jeremy Lin #17',
      position:'PG',
      id:9
    },
    {
      text:'Eric Moreland #15',
      position:'PF',
      id:10
    },
    {
      text:'Patrick McCaw #1',
      position:'SF',
      id:11
    },
    {
      text: 'OG Anunoby #3',
      position:'SF',
      id:12
    },
  ];
  
  randomName:string;

  randomRaptor(){
    this.randomName = this.tiles[Math.floor(Math.random()*this.tiles.length)].text;
    console.log(this.randomName)
  };

  ngOnInit() {
  }

}
