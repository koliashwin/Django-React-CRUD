import React, { Component } from "react";
import ProductModal from "./Modal2";
import axios from "axios";

const productsItems = [
    {
        id: 1,
        name: "bag",
        description: "school bag",
        cost: 1000.00,
        rating: 4.2,
    },
    {
        id: 2,
        name: "bag",
        description: "school bag",
        cost: 1000.00,
        rating: 4.2,
    },
    {
        id: 3,
        name: "bag",
        description: "school bag",
        cost: 1000.00,
        rating: 4.2,
    },
];

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewComplete: false,
            productList: [],
            modal: false,
            activeItem: {
                name: '',
                description: '',
                cost: 0.0,
                rating: 0.0,
            },
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios.get("http://localhost:8000/api/products/")
            .then((res) => this.setState({ productList: res.data }))
            .catch((err) => console.log(err));
    }

    toggle = () => {
        this.setState({ modal: !this.state.modal })
    };

    handleSubmit = (item) => {
        this.toggle();

        if (item.id) {
            axios.put(`http://localhost:8000/api/products/${item.id}/`, item)
                .then((res) => this.refreshList());
        }
        else {
            axios.post(`http://localhost:8000/api/products/`, item)
                .then((res) => this.refreshList());
        }
    };

    handleDelete = (item) => {
        axios.delete(`http://localhost:8000/api/products/${item.id}/`)
            .then((res) => this.refreshList());
    };

    createItem = () => {
        const item = { name: '', description: '', cost: 0.0, rating: 0.0};

        this.setState({ activeItem: item, modal: !this.state.modal});
    };

    editItem = (item) => {
        this.setState({ activeItem: item, modal: !this.state.modal});
    };

    render() {
        return (
            <main className="container">
                <h1 className="text-uppercase text-center">Products</h1>
                <div className="row">
                    <div className="col-sm-10 col-md-8 mx-auto p-1">
                        <div className="card p-4">
                            <div className="mb-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={this.createItem}
                                >
                                    Add Product
                                </button>
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Cost</th>
                                        <th>Rating</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.productList.map((item) => (
                                        <tr
                                            key={item.id}
                                        >
                                            <td>
                                                <img src={item.image} alt={item.name} width='100' height='100'/>
                                            </td>
                                            <td>
                                                {item.name}
                                            </td>
                                            <td>
                                                {item.cost}
                                            </td>
                                            <td>
                                                {item.rating}
                                            </td>
                                            <td>
                                                <span
                                                    className="btn btn-secondary"
                                                    onClick={() => this.editItem(item)}
                                                >
                                                    Edit
                                                </span>
                                                <span
                                                    className="btn btn-danger"
                                                    onClick={() => this.handleDelete(item)}
                                                >
                                                    Delete
                                                </span>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
                {this.state.modal ? (
                    <ProductModal
                        activeItem={this.state.activeItem}
                        toggle={this.toggle}
                        onSave={this.handleSubmit}
                    />
                ) : null}
            </main>
        );
    };
};

export default Products