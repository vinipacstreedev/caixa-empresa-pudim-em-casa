package com.pudim.caixa.controller;

import com.pudim.caixa.entity.Product;
import com.pudim.caixa.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service){
        this.service = service;
    }

    @GetMapping
    public List<Product> list(){
        return service.list();
    }

    @PostMapping
    public Product save(@RequestBody Product product){
        return service.save(product);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id){
        service.delete(id);
    }
}
