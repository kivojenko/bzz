package com.bzz.project.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/translate")
@RequiredArgsConstructor
public class TranslationController {
    @GetMapping("/toHuman")
    public String translateToHuman(@RequestParam String phrase) {
        return "bzz";
    }
}
