# Genera public/images/og-image.png (1200x630) con System.Drawing.
# Fondo pastel degradado + planeta esponjoso + titulo. Uso interno: ejecutar una vez.

Add-Type -AssemblyName System.Drawing

$w = 1200; $h = 630
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAlias

# Fondo: degradado vertical cosmos -> cotton
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$bgBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  $rect,
  [System.Drawing.Color]::FromArgb(243, 239, 252),  # #F3EFFC cosmos
  [System.Drawing.Color]::FromArgb(255, 240, 247),  # #FFF0F7 cotton
  90
)
$g.FillRectangle($bgBrush, $rect)
$bgBrush.Dispose()

# Estrellitas
$rnd = New-Object System.Random(42)
$starColors = @(
  [System.Drawing.Color]::FromArgb(255, 217, 107),  # lemon
  [System.Drawing.Color]::FromArgb(255, 143, 179),  # pink
  [System.Drawing.Color]::FromArgb(127, 184, 255),  # blue
  [System.Drawing.Color]::White
)
for ($i = 0; $i -lt 40; $i++) {
  $x = $rnd.Next(20, 1180)
  $y = $rnd.Next(20, 610)
  $s = $rnd.Next(3, 9)
  $sb = New-Object System.Drawing.SolidBrush($starColors[$i % 4])
  $g.FillEllipse($sb, $x, $y, $s, $s)
  $sb.Dispose()
}

# Planeta esponjoso (derecha): anillo orbital primero, luego copos y cuerpo
$cx = 950; $cy = 315
$ringPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(130, 124, 92, 255), 10)
$g.DrawEllipse($ringPen, $cx - 165, $cy - 45, 330, 90)
$ringPen.Dispose()

$px = @(0, 130, 0, -130, 92, -92, 92, -92, 0)
$py = @(-130, 0, 130, 0, -92, -92, 92, 92, 0)
$pr = @(62, 62, 62, 62, 62, 62, 62, 62, 110)
for ($i = 0; $i -lt $px.Count; $i++) {
  $x = $cx + $px[$i]; $y = $cy + $py[$i]; $r = $pr[$i]
  $puffRect = New-Object System.Drawing.Rectangle(($x - $r), ($y - $r), (2 * $r), (2 * $r))
  $pb = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $puffRect,
    [System.Drawing.Color]::FromArgb(255, 196, 222),
    [System.Drawing.Color]::FromArgb(180, 156, 255),
    90
  )
  $g.FillEllipse($pb, ($x - $r), ($y - $r), (2 * $r), (2 * $r))
  $pb.Dispose()
}

# Carita
$inkColor = [System.Drawing.Color]::FromArgb(58, 42, 99)
$eyeBrush = New-Object System.Drawing.SolidBrush($inkColor)
$g.FillEllipse($eyeBrush, ($cx - 48), ($cy - 28), 24, 24)
$g.FillEllipse($eyeBrush, ($cx + 24), ($cy - 28), 24, 24)
$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.FillEllipse($white, ($cx - 41), ($cy - 33), 9, 9)
$g.FillEllipse($white, ($cx + 31), ($cy - 33), 9, 9)
$smilePen = New-Object System.Drawing.Pen($inkColor, 8)
$smilePen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$smilePen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$g.DrawArc($smilePen, ($cx - 40), ($cy - 6), 80, 50, 20, 140)

# Titulo y subtitulo
$titleFont = New-Object System.Drawing.Font("Segoe UI", 88, [System.Drawing.FontStyle]::Bold)
$inkBrush = New-Object System.Drawing.SolidBrush($inkColor)
$pinkBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 93, 158))
$g.DrawString("Planeta", $titleFont, $inkBrush, 60, 150)
$g.DrawString("Algodón", $titleFont, $pinkBrush, 60, 260)

$subFont = New-Object System.Drawing.Font("Segoe UI", 32, [System.Drawing.FontStyle]::Regular)
$subBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(93, 84, 120))
$g.DrawString("by VENDIQ  ·  renta tu espacio, nosotros hacemos todo", $subFont, $subBrush, 64, 462)

# Limpieza
foreach ($obj in @($inkBrush, $pinkBrush, $subBrush, $white, $eyeBrush, $smilePen, $titleFont, $subFont)) {
  if ($obj) { $obj.Dispose() }
}
$g.Dispose()

$out = Join-Path $PSScriptRoot "..\public\images\og-image.png"
$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Output "Guardado: $out"
