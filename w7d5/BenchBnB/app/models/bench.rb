class Bench < ActiveRecord::Base
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds, min, max)
    benches = []

    if bounds.empty?
      self.all.each do |bench|
        if bench.seating.between?(min.to_i, max.to_i)
          benches << bench
        end
      end
      return benches
    end

    southWestLat = bounds[:southWest][:sLat].to_f
    northEastLat = bounds[:northEast][:nLat].to_f
    southWestLng = bounds[:southWest][:sLng].to_f
    northEastLng = bounds[:northEast][:nLng].to_f

    self.all.each do |bench|
      if bench.lat.between?(southWestLat, northEastLat) &&
        bench.lng.between?(southWestLng, northEastLng) &&
        bench.seating.between?(min.to_i, max.to_i)
        benches << bench
      end
    end

    benches
  end
end
