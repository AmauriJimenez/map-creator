import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramComponent, BasicShapeModel, NodeModel } from '@syncfusion/ej2-angular-diagrams';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  shapeComponent = {
    id: "1",
    refx: "100",
    refy: "100",
    type: "Basic",
    shape: 'Rectangle',
    source: ""
  };

  shapesArray: any[];

  addShape(shapeComponent){
    this.shapesArray.push(shapeComponent);
  }

  getShapesArguments(){

  }

  @ViewChild('diagram') public diagram: DiagramComponent;

  public shape: BasicShapeModel = {
    type: 'Basic',
    shape: 'Rectangle',
  };

  public getNodeDefaults(node: NodeModel): NodeModel {
    node.height = 100;
    node.width = 100;
    node.style.fill =  'none';
    return node;
  }
}
