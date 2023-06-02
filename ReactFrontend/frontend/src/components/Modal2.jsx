import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default class ProductModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeItem : this.props.activeItem,
        };
    }

    hangleChange = (e) => {
        let {name, value} = e.target;

        const activeItem = { ...this.state.activeItem, [name]: value};

        this.setState({ activeItem })
    };

    render(){
        const {toggle, onSave} = this.props;

        return(
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Product</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for='product-name'>Name</Label>
                            <Input
                                type="text"
                                id="product-name"
                                name="name"
                                value={this.state.activeItem.name}
                                onChange={this.hangleChange}
                                placeholder="Enter Product name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='product-description'>Description</Label>
                            <Input
                                type="text"
                                id="product-description"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.hangleChange}
                                placeholder="Enter Product description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='product-cost'>Cost</Label>
                            <Input
                                type="number"
                                id="product-cost"
                                name="cost"
                                value={this.state.activeItem.cost}
                                onChange={this.hangleChange}
                                placeholder="Enter Product cost"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for='product-rating'>rating</Label>
                            <Input
                                type="number"
                                id="product-rating"
                                name="rating"
                                value={this.state.activeItem.rating}
                                onChange={this.hangleChange}
                                placeholder="Enter Product rating"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="product-image">image</Label>
                            <Input
                                type="file"
                                id="product-image"
                                name="image"
                                value={this.state.activeItem.name}
                                onChange={this.hangleChange}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
};