package com.example.authapp.controller;

import com.example.authapp.dto.UserDto;
import com.example.authapp.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping
@RequiredArgsConstructor
@CrossOrigin("*")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/signup")
    public String register(@RequestBody UserDto dto) {
        return authService.register(dto);
    }

    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");
        return authService.login(email, password);
    }
}
