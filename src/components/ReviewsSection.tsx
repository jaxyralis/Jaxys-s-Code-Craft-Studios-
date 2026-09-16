import { useEffect, useState } from "react";
import { Quote, Star, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

type Review = {
  id: string;
  name: string;
  rating: number;
  comment: string;
  created_at: string;
};

export function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  async function loadReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("id, name, rating, comment, created_at")
      .order("created_at", { ascending: false })
      .limit(30);
    if (error) {
      toast.error("Could not load reviews");
    } else {
      setReviews(data ?? []);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadReviews();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedComment = comment.trim();
    if (!trimmedName || !trimmedComment) {
      toast.error("Please add your name and a comment.");
      return;
    }
    if (trimmedName.length > 80 || trimmedComment.length > 500) {
      toast.error("Please shorten your input.");
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error("Please pick a rating from 1 to 5.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase
      .from("reviews")
      .insert({ name: trimmedName, rating, comment: trimmedComment });
    setSubmitting(false);
    if (error) {
      toast.error("Could not submit your review. Please try again.");
      return;
    }
    toast.success("Thanks for your review!");
    setName("");
    setComment("");
    setRating(5);
    loadReviews();
  }

  return (
    <section className="border-t border-border bg-card/30 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Star className="h-3.5 w-3.5" />
            Reviews
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Rate my work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Share your experience with Jaxys's CodeCraft Studios. Your review will be visible to everyone on the site.
          </p>
        </div>

        {/* Submit form */}
        <Card className="mx-auto mb-12 max-w-2xl border-border bg-background/40">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="review-name">Your name</Label>
                <Input
                  id="review-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Thandi M."
                  maxLength={80}
                  required
                />
              </div>
              <div>
                <Label>Rating</Label>
                <div className="mt-2 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((n) => {
                    const active = (hoverRating || rating) >= n;
                    return (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setRating(n)}
                        onMouseEnter={() => setHoverRating(n)}
                        onMouseLeave={() => setHoverRating(0)}
                        aria-label={`Rate ${n} star${n > 1 ? "s" : ""}`}
                        className="p-1"
                      >
                        <Star
                          className={`h-6 w-6 transition-colors ${
                            active ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
              <div>
                <Label htmlFor="review-comment">Your review</Label>
                <Textarea
                  id="review-comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="What did you think of the website / service?"
                  maxLength={500}
                  rows={4}
                  required
                />
                <p className="mt-1 text-right text-xs text-muted-foreground">
                  {comment.length}/500
                </p>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Submit review"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Reviews list */}
        {loading ? (
          <div className="flex justify-center py-8 text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : reviews.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No reviews yet — be the first to leave one!
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="border-border bg-background/40 transition-all hover:border-primary/30"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, i) => (
                      <Star key={`e-${i}`} className="h-4 w-4 text-muted-foreground" />
                    ))}
                  </div>
                  <Quote className="mb-3 h-6 w-6 text-primary/60" />
                  <p className="mb-6 text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
                    "{review.comment}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(review.created_at).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
