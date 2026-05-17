package com.pudim.caixa.service;

import com.pudim.caixa.entity.Product;
import com.pudim.caixa.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository){
        this.repository = repository;
    }
    public List<Product> list(){
        return repository.findAll();
    }
    public Product save(Product product){
        return repository.save(product);
    }
    public void delete(Long id){
        repository.deleteById(id);
    }
}
