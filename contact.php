<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jmeno = strip_tags(trim($_POST["jmeno"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $zprava = trim($_POST["zprava"]);

    if (empty($jmeno) OR empty($zprava) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Prosím vyplňte formulář správně.";
        exit;
    }

    $prijemce = "vas-email@example.com";
    $predmet = "Nová zpráva od $jmeno";
    $obsah = "Jméno: $jmeno\n";
    $obsah .= "Email: $email\n\n";
    $obsah .= "Zpráva:\n$zprava\n";

    $hlavicky = "From: $jmeno <$email>";

    if (mail($prijemce, $predmet, $obsah, $hlavicky)) {
        http_response_code(200);
        echo "Děkujeme! Vaše zpráva byla odeslána.";
    } else {
        http_response_code(500);
        echo "Nastala chyba při odesílání zprávy.";
    }
} else {
    http_response_code(403);
    echo "Formulář může být odeslán pouze metodou POST.";
}
?>
