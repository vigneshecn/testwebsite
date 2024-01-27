import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Row,Stack,Col} from 'react-bootstrap';
import SelectSearch from 'react-select-search';

function SalesForm() {

    const handleHotItems = (e) => {
        if (!hotItems.includes(e)) {
            setHotItems((prev) => [...prev, e]);
        }
    };

    const getOptionsView = (items) =>{
        return <Stack className="mt-2" direction="horizontal" gap={2}>
            {items.map(item => <Button color='black' key={item}>{item}</Button>)}
        </Stack>
        
        //return (<Button>a</Button>);
    };
    


      const options = [
        {name: 'KS14354', value: 'KS14354'},
        {name: 'KS14316', value: 'KS14316'},
        {name: 'EB522', value: 'EB522'},
        {name: 'CESSY3005-03', value: 'CESSY3005-03'}, 
        {name: 'KS14317', value: 'KS14317'},
        {name: 'KS14318', value: 'KS14318'},
        {name: 'KS14319', value: 'KS14319'},
               
    ];
    const [hotItems, setHotItems]=useState([]);

    console.log(hotItems)
    return (
        <Form className="m-5">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Mobile" />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridCell">
              <Form.Label>Cell Phone</Form.Label>
              <Form.Control type="number" placeholder="Cell Phone" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Hot Items</Form.Label>
                {/*<Form.Control type="text" placeholder="Enter SKU"  list="datalistOptions" id="exampleDataList"/>
                <datalist id="datalistOptions">
                    {skuOptions}
                </datalist>*/}
                <SelectSearch id="hotItemsSelect" sx={{ width:"100%"}} options={options} value="sv" name="language" placeholder="Choose your language" search="true" onChange={handleHotItems}/>
                {getOptionsView(hotItems)}
            </Form.Group>
            
            
          </Row>
          <Row>
          

          </Row>
    
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      );
}

export default SalesForm;